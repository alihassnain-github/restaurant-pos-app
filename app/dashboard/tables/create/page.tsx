import Breadcrumbs from "@/components/breadcrumbs";
import Form from "@/components/ui/tables/create-table";

export default function Page() {
  return (
    <>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Tables", href: "/dashboard/tables", active: false },
          {
            label: "Create Table",
            href: "/dashboard/tables/create",
            active: true,
          },
        ]}
      />
      <Form />
    </>
  );
}
