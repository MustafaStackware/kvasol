import { contact, site } from "@/content/site";

/* ==========================================================================
   Enquiry delivery — isolated from the form UI.

   The site is a static export, so it cannot send email itself. Three routes
   are supported, in priority order:

   1. NEXT_PUBLIC_ENQUIRY_ENDPOINT — any URL that accepts a JSON POST.
   2. NEXT_PUBLIC_WEB3FORMS_KEY   — a free Web3Forms access key, which relays
      the submission to the inbox that key was registered to.
   3. No configuration            — the submission opens the visitor's email
      client, pre-addressed to the company email with all fields filled in.

   Route 3 always works, so the form is never a dead end.
   ========================================================================== */

export type EnquiryPayload = {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  location: string;
  message: string;
};

export type EnquiryResult =
  | { status: "sent" }
  | { status: "mailto"; href: string }
  | { status: "error"; message: string };

const endpoint = process.env.NEXT_PUBLIC_ENQUIRY_ENDPOINT?.trim();
const web3formsKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY?.trim();

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

/** How the form will deliver, decided at build time. */
export const enquiryDelivery: "endpoint" | "web3forms" | "mailto" = endpoint
  ? "endpoint"
  : web3formsKey
    ? "web3forms"
    : "mailto";

/** The inbox enquiries are addressed to. */
export const enquiryEmail = contact.email;

function subjectFor(payload: EnquiryPayload) {
  return `Project enquiry — ${payload.projectType} — ${payload.fullName}`;
}

function readableBody(payload: EnquiryPayload) {
  return [
    `Name: ${payload.fullName}`,
    `Company: ${payload.company || "—"}`,
    `Email: ${payload.email}`,
    `Phone / WhatsApp: ${payload.phone}`,
    `Project type: ${payload.projectType}`,
    `Project location: ${payload.location || "—"}`,
    "",
    "Message:",
    payload.message,
    "",
    `— Sent from ${site.url}`,
  ].join("\r\n");
}

/** Pre-addressed email fallback, used when no delivery service is configured. */
export function buildMailtoLink(payload: EnquiryPayload) {
  const params = new URLSearchParams({
    subject: subjectFor(payload),
    body: readableBody(payload),
  });
  return `mailto:${enquiryEmail ?? ""}?${params.toString().replace(/\+/g, "%20")}`;
}

export async function submitEnquiry(payload: EnquiryPayload): Promise<EnquiryResult> {
  const target = endpoint ?? (web3formsKey ? WEB3FORMS_URL : null);

  if (!target) return { status: "mailto", href: buildMailtoLink(payload) };

  const body = web3formsKey
    ? {
        access_key: web3formsKey,
        subject: subjectFor(payload),
        from_name: `${payload.fullName} — ${site.name} website`,
        replyto: payload.email,
        "Full name": payload.fullName,
        "Company or organisation": payload.company || "—",
        "Work email": payload.email,
        "Phone or WhatsApp": payload.phone,
        "Project type": payload.projectType,
        "Project location": payload.location || "—",
        Message: payload.message,
      }
    : { ...payload, source: new URL(site.url).host };

  try {
    const response = await fetch(target, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      return {
        status: "error",
        message: `We could not submit your enquiry (error ${response.status}). Please try again, or email us at ${enquiryEmail ?? "the address listed on this page"}.`,
      };
    }

    return { status: "sent" };
  } catch {
    return {
      status: "error",
      message: `We could not reach the enquiry service. Please check your connection and try again, or email us at ${enquiryEmail ?? "the address listed on this page"}.`,
    };
  }
}
