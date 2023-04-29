import { IonContent, IonItem, IonLabel, IonList, IonNote } from '@ionic/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ItemDTO } from '../dto/ItemDTO.dto'

const ItemList: React.FC = () => {
  const [items, setItems] = useState<ItemDTO[]>([]);

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await axios.get('https://test-app-spring-backend.herokuapp.com/test/items');
        const items = response.data;
        const itemDTOs = items.map((item: any) => new ItemDTO(item));
        setItems(itemDTOs);
      } catch (error) {
        console.error(error);
      }
    }

    fetchItems();
  }, []);

  return (
    <IonContent>
      <IonList>
        {items.map((item, index) => (
          <IonItem key={index}>
            <IonLabel>{item.name}</IonLabel>
            <IonNote slot="end">${item.price.toFixed(2)}</IonNote>
          </IonItem>
        ))}
      </IonList>
    </IonContent>
  );
};

export default ItemList;


