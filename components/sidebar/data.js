import {HiUsers} from 'react-icons/hi';
import {CiSettings} from 'react-icons/ci';
import {CgProfile} from 'react-icons/cg';
import {GiReceiveMoney, GiMoneyStack} from 'react-icons/gi';
import {FaHandshake} from 'react-icons/fa';
import {MdOutlineSavings, MdOutlineAttachMoney, MdCancel, MdRoomPreferences, MdMiscellaneousServices} from 'react-icons/md';
import {RiContactsFill} from 'react-icons/ri';
import {GoGraph} from 'react-icons/go';
import {GrOrganization} from 'react-icons/gr';
// import {IoBookOutline} from 'react-icons/io';
import {AiOutlineAudit} from 'react-icons/ai';


export const customers = [
    {
        id: 1,
        name: 'Users',
        to: '/users',
        icons: <HiUsers />
    },
    {
        id: 2,
        name: 'Guarantors',
        to: '/',
        icons: <CgProfile />
    },
    {
        id: 3,
        name: 'Loans',
        to: '/',
        icons: <GiReceiveMoney />
    },
    {
        id: 4,
        name: 'Decision Making',
        to: '/',
        icons: <FaHandshake />
    },
    {
        id: 5,
        name: 'Savings',
        to: '/',
        icons: <MdOutlineSavings />
    },
    {
        id: 6,
        name: 'Loan Requests',
        to: '/',
        icons: <GiReceiveMoney />
    },
    {
        id: 7,
        name: 'Whitelist',
        to: '/',
        icons: <RiContactsFill />
    },
    {
        id: 8,
        name: 'Karma',
        to: '/',
        icons: <RiContactsFill />
    },
]

export const businesses = [
    {
        id: 1,
        name: 'Organization',
        to: '/',
        icons: <GrOrganization />
    },
    {
        id: 2,
        name: 'Loan Products',
        to: '/',
        icons: <GiReceiveMoney />
    },
    {
        id: 3,
        name: 'Savings Products',
        to: '/',
        icons: <MdOutlineSavings />
    },
    {
        id: 4,
        name: 'Fees and Charges',
        to: '/',
        icons: <GiMoneyStack />
    },
    {
        id: 5,
        name: 'Transactions',
        to: '/',
        icons: <MdOutlineAttachMoney />
    },
    {
        id: 6,
        name: 'Services',
        to: '/',
        icons: <MdMiscellaneousServices />
    },
    {
        id: 7,
        name: 'Service Account',
        to: '/',
        icons: <RiContactsFill />
    },
    {
        id: 8,
        name: 'Settlements',
        to: '/',
        icons: <MdOutlineAttachMoney />
    },
    {
        id: 9,
        name: 'Reports',
        to: '/',
        icons: <GoGraph />
    },
] 

export const settings = [
    {
        id: 1,
        name: 'Preferences',
        to: '/',
        icons: <MdRoomPreferences />
    },
    {
        id: 2,
        name: 'Fees and Pricing',
        to: '/',
        icons: <MdCancel />
    },
    {
        id: 3,
        name: 'Audit Logs',
        to: '/',
        icons: <AiOutlineAudit />
    },
    {
        id: 4,
        name: 'Systems Messages',
        to: '/',
        icons: <CiSettings />
    },
]