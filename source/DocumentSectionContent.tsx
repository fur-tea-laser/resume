import { ComponentChildren } from "preact";

export interface TextSectionContentProps 
  extends Pick<SectionContentBaseProps, "contentLabel" | "accessibilityLabel"> {
  textContent: ComponentChildren
}

export function TextSectionContent({
  contentLabel,
  accessibilityLabel,
  textContent
}: TextSectionContentProps) {
  return (
    <SectionContentBase
      contentLabel={contentLabel}
      accessibilityLabel={accessibilityLabel}
      sectionContent={
        <div 
          role="paragraph"
          className="section-content-text-container"
        >
          {textContent}
        </div>
      }
    />
  );
}

export interface ColumnListSectionContentProps 
  extends Pick<SectionContentBaseProps, "contentLabel" | "accessibilityLabel"> {
  listItems: Array<ComponentChildren>
}

export function ColumnListSectionContent({
  accessibilityLabel,
  contentLabel,
  listItems
}: ColumnListSectionContentProps) {
  return (
    <SectionContentBase
      accessibilityLabel={accessibilityLabel}
      contentLabel={contentLabel}
      sectionContent={
        <div 
          role="list"
          className="section-content-column-list-container"
        >
          {listItems.map((someListItem, listItemIndex) => (
            <div
              key={listItemIndex}
              role="listitem"
              className="section-content-column-list-item-container"
            >
              <div
                role="presentation"
                className="section-content-column-list-item-bullet"
              >
                -
              </div>
              <div
                role="paragraph"
                className="section-content-column-list-item"
              >
                {someListItem}
              </div>
            </div>
          ))}
        </div>
      }
    />
  );
}

export interface WrapListSectionContentProps
  extends Pick<SectionContentBaseProps, "accessibilityLabel" | "contentLabel"> {
  listItems: ComponentChildren[];
}

export function WrapListSectionContent({
  accessibilityLabel,
  contentLabel,
  listItems
}: WrapListSectionContentProps) {
  return (
    <SectionContentBase
      accessibilityLabel={accessibilityLabel}
      contentLabel={contentLabel}
      sectionContent={
        <div 
          role="list" 
          className="section-content-wrap-list-container"
        >
          {listItems.map((someListItem, listItemIndex) => (
            <div
              key={listItemIndex}
              role="listitem"
              className="section-content-wrap-list-item-container"
            >
              <div
                role="paragraph"
                className="section-content-wrap-list-item"
              >
                {someListItem}
              </div>
            </div>
          ))}
        </div>
      }
    />
  );
}

interface SectionContentBaseProps {
  accessibilityLabel: string;
  contentLabel: string;
  sectionContent: ComponentChildren
}

function SectionContentBase({
  accessibilityLabel,
  contentLabel,
  sectionContent
}: SectionContentBaseProps) {
  return (
    <div
      role="region"
      aria-label={accessibilityLabel}
      className="section-content-container"
    >
      <div
        role="heading"
        aria-level={3}
        className="section-content-label-container"
      >
        {contentLabel}
        <div
          role="separator"
          className="section-content-label-underline"
        />
      </div>
      {sectionContent}
    </div>
  );
}