import { ComponentChildren } from "preact";

export interface DocumentSectionBaseProps {
  sectionDivider: ComponentChildren;
  accessibilityLabel: string;
  headerLabels: Array<ComponentChildren>
  bodyContent: ComponentChildren
}

export function DocumentSectionBase({
  sectionDivider,
  accessibilityLabel,
  headerLabels,
  bodyContent
}: DocumentSectionBaseProps) {
  return (
    <div role="none" className="document-section-container">
      {sectionDivider}
      <div 
        role="region" 
        aria-label={accessibilityLabel} 
        className="document-section-content-container"
      >
        <div
          role="heading"
          aria-level={2}
          className="document-section-accessibility-header"
        >
          {accessibilityLabel}
        </div>
        <div 
          role="list" 
          className="document-section-header-container"
        >
          {headerLabels.map((someHeaderLabel, labelIndex) => (
            <div 
              role="listitem" 
              className="document-section-label-container" 
              key={labelIndex}
            >
              {someHeaderLabel}
            </div>
          ))}
        </div>
        <div 
          role="presentation"
          className="document-section-body-container"
        >
          <div
            role="group"
            className="document-section-body-content-container"
          >
            {bodyContent}
          </div>
        </div>
      </div>
    </div>
  );
}

export interface TextHeaderLabelProps {
  label: string;
}

export function TextHeaderLabel({
  label
}: TextHeaderLabelProps) {
  return (
    <div
      className="document-section-header-label"
    >
      {label}
    </div>
  );
}

export interface LinkHeaderLabelProps {
  label: string;
  linkHref: string;
}

export function LinkHeaderLabel({
  linkHref,
  label
}: LinkHeaderLabelProps) {
  return (
    <a 
      className='document-section-header-label'
      href={linkHref}
    >
      {label}
    </a>
  );
}