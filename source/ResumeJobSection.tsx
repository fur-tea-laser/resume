import { DocumentSectionBase, TextHeaderLabel } from "./DocumentSectionBase.tsx";
import { ColumnListSectionContent, TextSectionContent, WrapListSectionContent } from "./DocumentSectionContent.tsx";

export interface ResumeJobSectionProps {
  companyName: string;
  teamName: string;
  jobTitle: string;
  dateRange: string;
  productDescription: string;
  workResponsibilities: string[];
  techStack: string[];
}

export function ResumeJobSection({
  companyName,
  jobTitle,
  teamName,
  dateRange,
  productDescription,
  workResponsibilities,
  techStack
}: ResumeJobSectionProps) {
  return (
    <DocumentSectionBase
      sectionDivider={<SectionDivider />}
      accessibilityLabel={`job: ${companyName} - ${jobTitle}`}
      headerLabels={[
        <TextHeaderLabel 
          key={0}
          label={companyName}
        />,
        <TextHeaderLabel 
          key={1}
          label={teamName}
        />,
        <TextHeaderLabel 
          key={2}
          label={jobTitle}
        />,
        <TextHeaderLabel 
          key={3}
          label={dateRange}
        />
      ]}
      bodyContent={[
        <TextSectionContent
          key={0}
          accessibilityLabel={`product description: ${companyName} - ${jobTitle}`}
          contentLabel="product"
          textContent={productDescription}
        />,
        <ColumnListSectionContent
          key={1}
          accessibilityLabel={`job responsibilities: ${companyName} - ${jobTitle}`}
          contentLabel="responsibilities"
          listItems={workResponsibilities}
        />,
        <WrapListSectionContent
          key={2}
          accessibilityLabel={`technology used: ${companyName} - ${jobTitle}`}
          contentLabel="tech"
          listItems={techStack}
        />
      ]}
    />
  );
}

export function SectionDivider() {
  return (
    <div 
      role="separator" 
      className="section-divider"
    />
  );
}