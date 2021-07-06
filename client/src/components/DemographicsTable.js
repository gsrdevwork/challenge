import PropTypes from 'prop-types';

const DemographicsTable = ({ loading, ageDemographics }) => {
    return (
        <div className="shadow overflow-auto border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Age
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Count
                        </th>
                    </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200">
                    {!loading &&
                        ageDemographics.map((data) => (
                            <tr key={data.age}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-gray-900">
                                                {data.age}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">
                                        {data.count}
                                    </div>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
            {loading && (
                <div className="w-full p-3 flex justify-center items-center h-full">
                    <LoadingIndicator />
                </div>
            )}
        </div>
    );
};

DemographicsTable.defaultProps = {
    loading: false,
    ageDemographics: [],
};

DemographicsTable.propTypes = {
    loading: PropTypes.bool,
    ageDemographics: PropTypes.array(
        PropTypes.shape({
            age: PropTypes.string,
            count: PropTypes.number,
        })
    ),
};

const LoadingIndicator = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{
            margin: 'auto',
            background: 'none',
            display: 'block',
            shapeRendering: 'auto',
        }}
        width="50px"
        height="50px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
    >
        <circle
            cx={50}
            cy={50}
            fill="none"
            stroke="#0a0a0a"
            strokeWidth={16}
            r={38}
            strokeDasharray="179.0707812546182 61.690260418206066"
        >
            <animateTransform
                attributeName="transform"
                type="rotate"
                repeatCount="indefinite"
                dur="1.075268817204301s"
                values="0 50 50;360 50 50"
                keyTimes="0;1"
            />
        </circle>
    </svg>
);

export default DemographicsTable;
