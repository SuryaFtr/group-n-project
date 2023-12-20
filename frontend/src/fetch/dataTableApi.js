
export const programColumns = [
    { field: "id", headerName: "No", width: 60 },
    {
        field: "title",
        headerName: "Title",
        width: 140,
    },
    {
        field: "description",
        headerName: "Decription",
        width: 280,
    },
    {
        field: "programDate",
        headerName: "Program Date",
        width: 130,
    },
    {
        field: "publishedBy",
        headerName: "Published By",
        width: 220,
        renderCell: (params) => {
            return (
                <>{params.row.publishedBy}</>
            );
        },
    },
];
