import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { fetchUsers } from '@/features/userSlice';
import React, { useEffect, useState } from 'react'
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io'
import Image from 'next/image';
import bar from '../../public/assets/images/bar.svg';
import { columns } from './data';
import styles from './table.module.scss';
import  Body  from '../tableBody/Body'
import ReactPaginate from 'react-paginate';
import Filter from '../filter/Filter';

const Table = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [usersPerPage, setUsersPerPage] = useState(10);
  const [filterDropdown, setFilterDropdown] = useState(false);

  const pagesVisted = pageNumber * usersPerPage;

  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.user);

  useEffect(() => {
    dispatch(fetchUsers())
  }, []);

  console.log(user);

  const pageCount = Math.ceil(user?.users.length / usersPerPage);
  const changePage = ({ selected  } : any) => {
    setPageNumber(selected);
  };

  const displayUsers = user?.users.slice(pagesVisted, (pagesVisted + 1 )* usersPerPage)
      .map((user) => {
          return (
            <Body user={user} />
          )
      });

      const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setUsersPerPage(Number(e.target.value));
        setPageNumber(0); // Reset to the first page when changing items per page
      };

      // handle toggle filter dropdown
      const toggleFilterDropdown = () => {
        setFilterDropdown(prev => !prev);
      }

  return (
    <>
    <div className={styles.table__container}>
      <table className={styles.table}>
        <thead>
        {columns.map((column) =>(
          <th key={column.id}>
            <tr>
              <p className={styles.table__head} onClick={toggleFilterDropdown}>
                {column.name}
                <Image src={bar} alt='bar' width={16} height={10.67}/>
              </p>
            </tr>
          </th>
        ))}
        {/* Filter dropdown */}
        {
          filterDropdown && (
            <Filter />
          )
        }
        </thead>
        <tbody>{displayUsers}</tbody>
      </table>
    </div>

      {/* Pagination */}
      <div className={styles.paginate}>
        <div className={styles.paginate__pageChange}>
          <label htmlFor="itemsPerPage">Showing</label>
          <select
            id="itemsPerPage"
            value={usersPerPage}
            onChange={handleItemsPerPageChange}
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <label htmlFor="itemsPerPage">of {user?.users.length}</label>
        </div>
        <ReactPaginate 
          previousLabel={<IoMdArrowDropleft className={styles.page__icon} />}
          nextLabel={<IoMdArrowDropright className={styles.page__icon} />}
          pageCount={pageCount}
          onPageChange={changePage}
          breakLabel={"..."}
          pageClassName={styles.page}
          containerClassName={styles.pageContainer}
          activeClassName={styles.paginationActive}
          disabledClassName={"disableBtn"}
        />
      </div>
    </>
  )
}

export default Table