import { useState } from 'react';
import styles from './fiilter.module.scss';

interface IFilterOptions {
    onFilter: (username: string, email: string) => void
}

const Filter = ({
    onFilter,
} : IFilterOptions) => {

const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onFilter(username, email);
  };

  return (
    <div className={styles.filter}>
        <form>
            <label>
                <p>orgainization</p>
                <select>
                    <option value="lendsqr">Lendsqr</option>
                </select>
            </label>
            <label>
                <p>Username</p>       
                <input type="text" placeholder='user'   value={username}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}/>
            </label>
            <label>
                <p>Email</p>  
                <input type="email" placeholder='email'  value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}/>
            </label>
            <label>
                <p>Date</p>
                <input type='date' placeholder='user'/>
            </label>
            <label>
                <p>Phone Number</p>
                <input type="text" placeholder='Phone Number'/>
            </label>
            <label>
                <p>Status</p>    
                <select>
                    <option value="active">Active</option>
                    <option value="blacklisted">Blacklisted</option>
                </select>
            </label>

            <div className={styles.filter__btns}>
                <button className={styles.filter__btns_reset}>Reset</button>
                <button className={styles.filter__btns_filter} onClick={handleFilter}>Filter</button>
            </div>
        </form>
    </div>
  )
}

export default Filter