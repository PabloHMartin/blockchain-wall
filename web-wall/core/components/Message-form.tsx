import { useState } from 'react';
import styles from '../../styles/Message-form.module.css';
import { useAppDispatch } from '../redux/app/hooks';
import { addOne } from '../redux/wall-slice';

function MessageForm() {

    const [message, setMessage] = useState('');
    const dispatch = useAppDispatch();

    const handleSubmit = (evt) => {
        evt.preventDefault();

        let date = (new Date()).getTime();
        
        let msg = message;
    
        dispatch(addOne({msg,date}));

        setMessage('');
    }

    return ( 
        <div className={styles.article}>
            <div className={styles.title}>Send your message to the wall</div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label>
                    Frirst Name:
                </label>
                <textarea
                rows={5} cols={35}
                className={styles.textarea}
                value={message}
                onChange={e => setMessage(e.target.value)}
                >
                </textarea>

                <input  className={styles.btn} type="submit" value="SEND" />
            </form>

        </div>
    );
}

export default MessageForm;