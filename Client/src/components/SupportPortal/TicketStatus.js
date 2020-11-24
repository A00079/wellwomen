import React from 'react';
import RaisedTicket from '../../REST/Raiseticket.js';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
    }
}));

const TicketStatus = () => {
    const classes = useStyles();
    const [tiicketData, setTicketData] = React.useState([]);
    const [userEmail, setUserEmail] = React.useState('');

    const fetchData = () => {
        let api_url = "api/user/raiseticket/read";
        let data = {
            'email': userEmail,
        }
        RaisedTicket
            .getTicketData(api_url, data)
            .then((res) => {
                if (res.data && res.data.length !== 0) {
                    console.log('Ticket data', res);
                    setTicketData([res.data]);
                }
            })
    }

    return (
        <React.Fragment>
            {
                tiicketData && tiicketData.length > 0 ?
                    <section class="antialiased font-sans bg-gray-200">
                        <div class="container mx-auto px-4 sm:px-8">
                            <div class="py-8">
                                <div>
                                    <h2 class="text-2xl font-semibold leading-tight">Ticket Status</h2>
                                </div>
                                <div class="my-2 flex sm:flex-row flex-col">
                                    <div class="flex flex-row mb-1 sm:mb-0">
                                    </div>
                                </div>
                                <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                                    <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                        <table class="min-w-full leading-normal">
                                            <thead>
                                                <tr>
                                                    <th
                                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                        Name
                                            </th>
                                                    <th
                                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                        Ticket ID
                                            </th>
                                                    <th
                                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                        Phone Number
                                            </th>
                                                    <th
                                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                        Email
                                            </th>
                                                    <th
                                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                        Query
                                            </th>
                                                    <th
                                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                        Status
                                            </th>
                                                    <th
                                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                        Created On
                                            </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    tiicketData.map((el, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                    <div class="flex items-center">
                                                                        <div class="flex-shrink-0 w-10 h-10">
                                                                            <Avatar className={classes.orange}>{el.name.split(0, 1)[0].charAt(0).toUpperCase()}</Avatar>
                                                                        </div>
                                                                        <div class="ml-3">
                                                                            <p class="text-gray-900 whitespace-no-wrap">
                                                                                {el.name}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                    <p class="text-gray-900 whitespace-no-wrap">{el.ticketid}</p>
                                                                </td>
                                                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                    <p class="text-gray-900 whitespace-no-wrap">{el.phonenumber}</p>
                                                                </td>
                                                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                    <p class="text-gray-900 whitespace-no-wrap">
                                                                        {el.email}
                                                                    </p>
                                                                </td>
                                                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                    <p class="text-gray-900 whitespace-no-wrap">
                                                                        {el.query}
                                                                    </p>
                                                                </td>
                                                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                    <span
                                                                        class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                                        <span aria-hidden
                                                                            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                                                        <span class="relative">{!!el.ticketstatus ? el.ticketstatus : 'Not Available'}</span>
                                                                    </span>
                                                                </td>
                                                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                    <p class="text-gray-900 whitespace-no-wrap">
                                                                        {new Date(el.date).toDateString()}
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    :
                    <div class="w-full">
                        <div class="h-2 bg-indigo"></div>
                        <div class="flex items-center justify-center h-64">
                            <div class="container mx-2 bg-white rounded shadow-lg">
                                <div class="px-12 py-6">
                                    <div class="text-center">
                                        <h1 class="font-normal text-3xl text-grey-darkest leading-loose my-3 w-full">Check Your Ticket Status</h1>
                                        <div class="w-full text-center">
                                            <div>
                                                <div class="max-w-sm mx-auto p-1 pr-0 flex items-center">
                                                    <input type="email" onChange={event => { setUserEmail(event.target.value) }} placeholder="Enter Your Email Address..." class="flex-1 appearance-none rounded shadow p-3 text-grey-dark mr-2 focus:outline-none" />
                                                    <button style={{ outline: 'none',backgroundColor: '#D00f7F', fontFamily: 'Open Sans', color: '#FFF' }} onClick={() => fetchData()} class="appearance-none bg-indigo text-white text-base font-semibold tracking-wide uppercase p-3 rounded shadow hover:bg-indigo-light">Search</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }

        </React.Fragment>
    );
}

export default TicketStatus;