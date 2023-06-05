import styles from './fiilter.module.scss';

const Filter = () => {
  return (
    <div className={styles.filter}>
        <form>
            <label htmlFor="">
                <p>orgainization</p>
                <select>
                    <option value="lendsqr">Lendsqr</option>
                </select>
            </label>
            <label htmlFor="">
                <p>Username</p>       
                <input type="text" placeholder='user'/>
            </label>
            <label htmlFor="">
                <p>Email</p>  
                <input type="email" placeholder='email'/>
            </label>
            <label htmlFor="">
                <p>Date</p>
                <input type='date' placeholder='user'/>
            </label>
            <label htmlFor="">
                <p>Phone Number</p>
                <input type="text" placeholder='Phone Number'/>
            </label>
            <label htmlFor="">
                <p>Status</p>    
                <select>
                    <option value="active">Active</option>
                    <option value="blacklisted">Blacklisted</option>
                </select>
            </label>

            <div className={styles.filter__btns}>
                <button className={styles.filter__btns_reset}>Reset</button>
                <button className={styles.filter__btns_filter}>Filter</button>
            </div>
        </form>
    </div>
  )
}

export default Filter