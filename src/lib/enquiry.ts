/* ==========================================================================
   Enquiry delivery — deliberately isolated from the form UI.

   No endpoint is connected yet. Set NEXT_PUBLIC_ENQUIRY_ENDPOINT to a URL that
   accepts a JSON POST (for example a Formspree / Web3Forms / Apps Script or
   custom API route) and the form starts delivering with no UI changes. Until
   then the form validates normally and honestly reports that it cannot send.
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
  | { status: "unconfigured" }
  | { status: "error"; message: string };

const endpoint = process.env.NEXT_PUBLIC_ENQUIRY_ENDPOINT?.trim();

/** True when a delivery endpoint has been configured at build time. */
export const isEnquiryDeliveryConfigured = Boolean(endpoint);

export async function submitEnquiry(payload: EnquiryPayload): Promise<EnquiryResult> {
  if (!endpoint) return { status: "unconfigured" };

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ ...payload, source: "kvasol.com" }),
    });

    if (!response.ok) {
      return {
        status: "error",
        message: `The enquiry service returned an error (${response.status}). Please try again or contact us directly.`,
      };
    }

    return { status: "sent" };
  } catch {
    return {
      status: "error",
      message:
        "We could not reach the enquiry service. Please check your connection and try again, or contact us directly.",
    };
  }
}
