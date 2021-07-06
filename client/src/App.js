import { useState } from 'react';
import UsersTable from './components/UsersTable';
import Dropdown from './components/Dropdown';
import DemographicsTable from './components/DemographicsTable';
import useUsers from './hooks/useUsers';
import useItems from './hooks/useItems';
import useDemographics from './hooks/useDemographics';

function App() {
    const users = useUsers();
    const items = useItems();
    const [selected, setSelected] = useState('');
    const { loading, ageDemographics } = useDemographics(selected)

    return (
        <main className="container mx-auto px-4 py-8">
            <section className="mb-8">
                <header className="mb-4">
                    <h1 className="text-3xl font-bold">All Users</h1>
                    <p className="text-gray-500">Users and their age</p>
                </header>
                <UsersTable users={users} />
            </section>
            <section className="mb-8">
                <header className="mb-4">
                    <h1 className="text-3xl font-bold mb-2">
                        Age Demographics of Users With _____
                    </h1>
                    <Dropdown
                        selected={selected}
                        items={items}
                        onSelect={setSelected}
                    />
                </header>
                <DemographicsTable loading={loading} ageDemographics={ageDemographics} />
            </section>
        </main>
    );
}

export default App;
