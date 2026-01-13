import Breadcrumbs from '@/components/breadcrumbs';
import Form from '@/components/ui/expenses/create-expense';

export default function Page() {
    return (
        <>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Expenses', href: '/dashboard/expenses', active: false },
                    {
                        label: 'Add Expense',
                        href: '/dashboard/expenses/add',
                        active: true,
                    },
                ]}
            />
            <Form />
        </>
    );
}
