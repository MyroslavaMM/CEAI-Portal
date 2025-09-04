import type { FC } from "react";
import ContentLayout from "../../../layouts/ContentLayout/ContentLayout";
import Header from "../../../components/header";
import ToolsContent from "../../../components/toolsContent";
import { useParams } from "react-router-dom";
import { toolsData } from "../../../data";

const TwoByTwoStewardship: FC = () => {
  const { id } = useParams();
  const tool = toolsData?.find((item) => item.id === id)!;
  return (
    <ContentLayout>
      <Header name={tool?.name} icon={tool?.icon} />
      <ToolsContent />
    </ContentLayout>
  );
};

export default TwoByTwoStewardship;
