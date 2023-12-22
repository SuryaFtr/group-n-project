import React from 'react';
import './Datatable.scss';

import { DataGrid } from '@mui/x-data-grid';
import { userColumns } from '../../../fetch/dataTableApi'
import { Link } from "react-router-dom";

const TableUsers = ({ data, onDelete }) => {

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 400,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to={params.row._id} style={{ textDecoration: "none" }}>
                            <div className="viewButton">View Details</div>
                        </Link>
                        <Link to={'user-role/' + params.row._id}>
                            <div className="viewButton">Change Role</div>
                        </Link>
                        <div
                            className="deleteButton"
                            onClick={() => {
                                if (window.confirm('Are you sure you, wish to delete this item?')) {
                                    onDelete(params.row._id)
                                }
                            }}
                        >
                            Delete
                        </div>
                    </div>
                );
            },
        },
    ];

    const getRowId = (row) => row.id;

    return (
        <div className='datatable'>
            <div className="datatableTitle">
                Users
            </div>
            <DataGrid
                rows={data}
                columns={userColumns.concat(actionColumn)}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                getRowId={getRowId}
            />
        </div>
    )
}

export default TableUsers