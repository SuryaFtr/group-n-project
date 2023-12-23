
export const userColumns = [
    { field: "id", headerName: "No", width: 60 },
    {
        field: "username",
        headerName: "User Name",
        width: 140,
    },
    {
        field: "email",
        headerName: "Email",
        width: 280,
    },
    {
        field: "permissions",
        headerName: "Permission Role",
        width: 130,
        renderCell: (params) => {
            return (
                <>{params.row.permissions[0].name}</>
            );
        },
    }
];

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

export const eventColumns = [
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
        field: "eventDate",
        headerName: "Event Date",
        width: 130,
    },
    {
        field: "eventLink",
        headerName: "Event Link",
        width: 220,
    },
];

export const newsColumns = [
    { field: "id", headerName: "No", width: 60 },
    {
        field: "title",
        headerName: "Title",
        width: 150,
    },
    {
        field: "text",
        headerName: "Description",
        width: 300,
    },
];