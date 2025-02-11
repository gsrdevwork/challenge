import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import PropTypes from 'prop-types';
const Dropdown = ({ items, selected, onSelect }) => {
    return (
        <Listbox value={selected} onChange={onSelect}>
            <div className="relative mt-1">
                <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-gray-100 rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                    <span className="block truncate">{selected || 'Item'}</span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <SelectorIcon
                            className="w-5 h-5 text-gray-400"
                            aria-hidden="true"
                        />
                    </span>
                </Listbox.Button>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {items.map((item, itemIdx) => (
                            <Listbox.Option
                                key={itemIdx}
                                className={({ active }) =>
                                    `${
                                        active
                                            ? 'text-amber-900 bg-amber-100'
                                            : 'text-gray-900'
                                    }
                          cursor-default select-none relative py-2 pl-10 pr-4 hover:bg-blue-600 hover:text-white`
                                }
                                value={item}
                            >
                                {({ selected, active }) => (
                                    <>
                                        <span
                                            className={`${
                                                selected
                                                    ? 'font-medium'
                                                    : 'font-normal'
                                            } block truncate`}
                                        >
                                            {item}
                                        </span>
                                        {selected ? (
                                            <span
                                                className={`${
                                                    active
                                                        ? 'text-amber-600'
                                                        : 'text-amber-600'
                                                }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                                            >
                                                <CheckIcon
                                                    className="w-5 h-5"
                                                    aria-hidden="true"
                                                />
                                            </span>
                                        ) : null}
                                    </>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    );
};

Dropdown.defaultProps = {
    items: [],
    selected: ''
}

Dropdown.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string),
    selected: PropTypes.string,
    onSelect: PropTypes.func.isRequired,
};

export default Dropdown;
