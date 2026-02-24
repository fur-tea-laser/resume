import { DocumentSectionBase, LinkHeaderLabel, TextHeaderLabel } from "./DocumentSectionBase.tsx";
import { TextSectionContent } from "./DocumentSectionContent.tsx";

export interface ResumeHeaderSectionProps {
  fullName: string;
  emailAddress: string;
  briefText: string;
  statusText: string;
  shortTermGoalText: string;
  longTermGoalText: string;
}

export function ResumeHeaderSection({
  fullName,
  emailAddress,
  briefText,
  statusText,
  shortTermGoalText,
  longTermGoalText
}: ResumeHeaderSectionProps) {
  return (
    <DocumentSectionBase
      sectionDivider={null}
      accessibilityLabel={`career overview: ${fullName}`}
      headerLabels={[
        <TextHeaderLabel
          key={0}
          label={fullName}
        />,
        <LinkHeaderLabel
          key={1}
          label={emailAddress}
          linkHref={`mailto:${emailAddress}`}
        />
      ]}
      bodyContent={[
        <TextSectionContent 
          key={0}
          accessibilityLabel={`career brief: ${fullName}`}
          contentLabel="brief"
          textContent={briefText}
        />,
        <TextSectionContent 
          key={1}
          accessibilityLabel={`career status: ${fullName}`}
          contentLabel="status"
          textContent={statusText}
        />,
        <TextSectionContent 
          key={2}
          accessibilityLabel={`short-term career goal: ${fullName}`}
          contentLabel="short-term goal"
          textContent={shortTermGoalText}
        />,
        <TextSectionContent 
          key={3}
          accessibilityLabel={`long-term career goal: ${fullName}`}
          contentLabel="long-term goal"
          textContent={longTermGoalText}
        />
      ]}
    />
  );
}