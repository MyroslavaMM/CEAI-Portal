import type { FC } from "react";
import ContentLayout from "../../layouts/ContentLayout/ContentLayout";
import AgentsContent from "../../components/agents";

const Agents: FC = () => {
  return (
    <ContentLayout>
      <AgentsContent />
    </ContentLayout>
  );
};

export default Agents;
