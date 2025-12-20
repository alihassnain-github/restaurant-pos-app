import Breadcrumbs from "@/components/breadcrumbs";
import Form from "@/components/ui/categories/edit-category";

export default function Page() {
    return (
        <>
            <Breadcrumbs
                breadcrumbs={[
                    { label: "Categories", href: "/dashboard/categories", active: false },
                    {
                        label: "Edit Category",
                        href: "/dashboard/categories/id/edit",
                        active: true,
                    },
                ]}
            />
            <Form />
        </>
    );
}
