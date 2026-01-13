import Breadcrumbs from '@/components/breadcrumbs';
import Form from '@/components/ui/expenses/create-expense';

export default function Page() {
    return (
        <>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Expenses', href: '/dashboard/expenses', active: false },
                    {
                        label: 'Edit Expense',
                        href: '/dashboard/expenses/1/edit',
                        active: true,
                    },
                ]}
            />
            <Form />
        </>
    );
}
