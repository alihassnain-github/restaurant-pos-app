import Breadcrumbs from "@/components/breadcrumbs";
import Form from "@/components/ui/categories/create-category";

export default function Page() {
    return (
        <>
            <Breadcrumbs
                breadcrumbs={[
                    { label: "Categories", href: "/dashboard/categories", active: false },
                    {
                        label: "Create Category",
                        href: "/dashboard/categories/create",
                        active: true,
                    },
                ]}
            />
            <Form />
        </>
    );
}
