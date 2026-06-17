import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard,IonCardTitle, IonCardSubtitle, IonCardContent, IonCardHeader } from '@ionic/react';

import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Perfil de Usuario</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Perfil de Usuario</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="card-container">
          <IonCard className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfQcHVppvZkipCwthNivc3mSfpMvIdT-weRw2aOCAE3A&s=10" alt="Avatar" />
            <IonCardHeader>
              <IonCardTitle>Ariel Rueda</IonCardTitle>
              <IonCardSubtitle>agrueda</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              <p>Contenido de ejemplo para mostrar información</p>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
