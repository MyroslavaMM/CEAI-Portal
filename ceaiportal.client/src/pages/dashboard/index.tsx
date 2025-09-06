import type { FC } from "react";
import "./index.less";
import ContentLayout from "../../layouts/ContentLayout/ContentLayout";
import DashboardContent from "../../components/dashboardContent";

const Dashboard: FC = () => {
  return (
    <ContentLayout>
      <DashboardContent />
    </ContentLayout>
  );
};

export default Dashboard;
