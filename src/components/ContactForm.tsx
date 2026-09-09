"use client";

import { useId, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { contactSection } from "@/content/site";
import {
  enquiryDelivery,
  enquiryEmail,
  submitEnquiry,
  type EnquiryPayload,
} from "@/lib/enquiry";
import { Icon } from "./Icon";
import styles from "./ContactForm.module.css";

type FieldName = keyof EnquiryPayload;
type Errors = Partial<Record<FieldName, string>>;
type Status = "idle" | "submitting" | "sent" | "handoff" | "error";

const emptyForm: EnquiryPayload = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  projectType: "",
  location: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

function validate(values: EnquiryPayload): Errors {
  const errors: Errors = {};

  if (values.fullName.trim().length < 2) {
    errors.fullName = "Please enter your full name.";
  }
  if (!values.email.trim()) {
    errors.email = "Please enter your work email address.";
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = "Please enter a valid email address, for example name@company.com.";
  }
  if (values.phone.replace(/\D/g, "").length < 8) {
    errors.phone = "Please enter a contact number of at least 8 digits.";
  }
  if (!values.projectType) {
    errors.projectType = "Please select the type of project.";
  }
  if (values.message.trim().length < 20) {
    errors.message = "Please describe your requirement in at least 20 characters.";
  }

  return errors;
}

export function ContactForm() {
  const uid = useId();
  const formRef = useRef<HTMLFormElement | null>(null);
  const [values, setValues] = useState<EnquiryPayload>(emptyForm);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [mailtoHref, setMailtoHref] = useState("");

  const fieldId = (name: FieldName) => `${uid}-${name}`;
  const errorId = (name: FieldName) => `${uid}-${name}-error`;

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const name = event.target.name as FieldName;
    const next = { ...values, [name]: event.target.value };
    setValues(next);
    if (submitted) setErrors(validate(next));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);

    const nextErrors = validate(values);
    setErrors(nextErrors);

    const firstInvalid = Object.keys(nextErrors)[0] as FieldName | undefined;
    if (firstInvalid) {
      setStatus("idle");
      // getElementById, not querySelector — useId values contain colons.
      document.getElementById(fieldId(firstInvalid))?.focus();
      return;
    }

    setStatus("submitting");
    const result = await submitEnquiry(values);

    if (result.status === "sent") {
      setStatus("sent");
      setValues(emptyForm);
      setSubmitted(false);
      return;
    }
    if (result.status === "mailto") {
      /* No delivery service configured: hand the completed enquiry to the
         visitor's email client, pre-addressed to the company inbox. */
      setMailtoHref(result.href);
      setStatus("handoff");
      window.location.href = result.href;
      return;
    }
    setErrorMessage(result.message);
    setStatus("error");
  };

  const describedBy = (name: FieldName) => (errors[name] ? errorId(name) : undefined);

  if (status === "sent") {
    return (
      <div className={styles.card}>
        <div className={styles.result} role="status">
          <span className={`${styles.resultIcon} ${styles.resultIconOk}`} aria-hidden="true">
            <Icon name="check-circle" size={28} />
          </span>
          <h3 className={styles.resultTitle}>Thank you — your enquiry has been received</h3>
          <p className={styles.resultText}>
            A member of the KVASol engineering team will review your requirements and respond
            shortly.
          </p>
          <button type="button" className="btn btnSecondary" onClick={() => setStatus("idle")}>
            Submit another enquiry
          </button>
        </div>
      </div>
    );
  }

  if (status === "handoff") {
    return (
      <div className={styles.card}>
        <div className={styles.result} role="status">
          <span className={`${styles.resultIcon} ${styles.resultIconOk}`} aria-hidden="true">
            <Icon name="mail" size={28} />
          </span>
          <h3 className={styles.resultTitle}>Your enquiry is ready to send</h3>
          <p className={styles.resultText}>
            Your email application should now be open with your enquiry addressed to{" "}
            <strong>{enquiryEmail}</strong>. Press send there to complete your enquiry.
          </p>
          <div className={styles.resultActions}>
            <a href={mailtoHref} className="btn btnPrimary">
              Open my email application again
              <Icon name="arrow-right" size={18} />
            </a>
            <button type="button" className="btn btnSecondary" onClick={() => setStatus("idle")}>
              Back to the form
            </button>
          </div>
          <p className={styles.resultNote}>
            If nothing opened, your device may not have an email application configured. You can
            reach us on WhatsApp instead, using the numbers listed on this page.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <h3 className={styles.formTitle}>Project enquiry</h3>
      <p className={styles.formHint}>
        Fields marked <abbr title="required">*</abbr> are required.
      </p>

      <form ref={formRef} className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor={fieldId("fullName")}>
              Full name <span aria-hidden="true">*</span>
            </label>
            <input
              id={fieldId("fullName")}
              name="fullName"
              type="text"
              autoComplete="name"
              required
              value={values.fullName}
              onChange={handleChange}
              aria-invalid={errors.fullName ? true : undefined}
              aria-describedby={describedBy("fullName")}
            />
            {errors.fullName && (
              <p className={styles.error} id={errorId("fullName")}>
                <Icon name="alert" size={15} />
                {errors.fullName}
              </p>
            )}
          </div>

          <div className={styles.field}>
            <label htmlFor={fieldId("company")}>
              Company or organisation <span className={styles.optional}>(optional)</span>
            </label>
            <input
              id={fieldId("company")}
              name="company"
              type="text"
              autoComplete="organization"
              value={values.company}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor={fieldId("email")}>
              Work email <span aria-hidden="true">*</span>
            </label>
            <input
              id={fieldId("email")}
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              required
              value={values.email}
              onChange={handleChange}
              aria-invalid={errors.email ? true : undefined}
              aria-describedby={describedBy("email")}
            />
            {errors.email && (
              <p className={styles.error} id={errorId("email")}>
                <Icon name="alert" size={15} />
                {errors.email}
              </p>
            )}
          </div>

          <div className={styles.field}>
            <label htmlFor={fieldId("phone")}>
              Phone or WhatsApp number <span aria-hidden="true">*</span>
            </label>
            <input
              id={fieldId("phone")}
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              required
              value={values.phone}
              onChange={handleChange}
              aria-invalid={errors.phone ? true : undefined}
              aria-describedby={describedBy("phone")}
            />
            {errors.phone && (
              <p className={styles.error} id={errorId("phone")}>
                <Icon name="alert" size={15} />
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor={fieldId("projectType")}>
              Project type <span aria-hidden="true">*</span>
            </label>
            <div className={styles.selectWrap}>
              <select
                id={fieldId("projectType")}
                name="projectType"
                required
                value={values.projectType}
                onChange={handleChange}
                aria-invalid={errors.projectType ? true : undefined}
                aria-describedby={describedBy("projectType")}
              >
                <option value="">Select a project type</option>
                {contactSection.projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <Icon name="arrow-right" size={16} className={styles.selectIcon} />
            </div>
            {errors.projectType && (
              <p className={styles.error} id={errorId("projectType")}>
                <Icon name="alert" size={15} />
                {errors.projectType}
              </p>
            )}
          </div>

          <div className={styles.field}>
            <label htmlFor={fieldId("location")}>
              Project location <span className={styles.optional}>(optional)</span>
            </label>
            <input
              id={fieldId("location")}
              name="location"
              type="text"
              placeholder="City, province"
              value={values.location}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={styles.field}>
          <label htmlFor={fieldId("message")}>
            Message <span aria-hidden="true">*</span>
          </label>
          <textarea
            id={fieldId("message")}
            name="message"
            rows={5}
            required
            value={values.message}
            onChange={handleChange}
            placeholder="Tell us about the site, load requirements, timelines or the scope you are considering."
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={describedBy("message")}
          />
          {errors.message && (
            <p className={styles.error} id={errorId("message")}>
              <Icon name="alert" size={15} />
              {errors.message}
            </p>
          )}
        </div>

        <div className={styles.footer}>
          <button type="submit" className="btn btnPrimary" disabled={status === "submitting"}>
            {status === "submitting" ? (
              <>
                <span className={styles.spinner} aria-hidden="true" />
                Sending…
              </>
            ) : (
              <>
                {contactSection.submitLabel}
                <Icon name="arrow-right" size={18} />
              </>
            )}
          </button>

          {enquiryDelivery === "mailto" && enquiryEmail && (
            <p className={styles.notice}>
              Submitting opens your email application with these details addressed to{" "}
              {enquiryEmail}.
            </p>
          )}
        </div>

        <div aria-live="polite" className={styles.live}>
          {status === "error" && (
            <p className={`${styles.status} ${styles.statusError}`} role="alert">
              <Icon name="alert" size={18} />
              <span>{errorMessage}</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
