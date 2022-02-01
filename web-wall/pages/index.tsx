import styles from '../styles/Home.module.css'
import MetaTags from '../core/components/Metatags';
import Card from '../core/components/Card';
import { useAppDispatch, useAppSelector} from '../core/redux/app/hooks';
import { addOne, setMessages } from '../core/redux/wall-slice';
import { useEffect } from 'react';
import { DTOMessage } from '../core/models/DTOMessage';
import { wrapper } from '../core/redux/app/store';
import factory from '../core/ethereum/factory';
import MessageForm from '../core/components/Message-form';

// Next and sagas are not working well together so we get initial info directly from blockchain call
Home.getInitialProps = wrapper.getInitialPageProps(store => async ({ req, res }) => {
  
  const title = "Crypto wall | Web3 demo project by Pablo H. Martin";
  const description = "Crypto wall | demo project by Pablo H. Martin";
  const image = "Crypto wall | demo project by Pablo H. Martin";

  const messagesDTO = await factory.methods.getAll().call();
  const messages =  messagesDTO.map( msg => {
      return { 
          address: msg._address,
          message: msg.message,
          publishDate: msg.publishDate
      }
  });

  return {title,description,image, messages }
});

export default function Home({title, description, image, messages}) {

  const dispatch = useAppDispatch();

  useEffect(() => {
   dispatch(setMessages(messages));
  }, [dispatch]);

  const msgs: DTOMessage[] = useAppSelector(state => state.wall.messages);



  return (
    <main className={styles.main}>
      <MetaTags title={title} description={description} image={image} />
      {/* <button onClick={handleClick}>Add Msg</button> */}
      <MessageForm />
      <div className={styles.cards}>
        { msgs.length > 0 ? 
          msgs.map ( (msg, index) => <Card key={index} 
                                            address={msg.address} 
                                            message={msg.message}  
                                            publishDate={msg.publishDate}/>  
                                            ).reverse() :
          <div>No Messages found</div>
        }
        
      </div>
    </main>

  )
}
