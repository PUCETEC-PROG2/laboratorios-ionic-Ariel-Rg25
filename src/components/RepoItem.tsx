import { IonItemSliding, IonItem, IonThumbnail, IonLabel, IonItemOptions, IonItemOption, IonIcon } from '@ionic/react';
import { language, pencil, trash } from 'ionicons/icons';
import './RepoItem.css'
import React from 'react'
import { Repository } from '../interfaces/Repository';

const RepoItem: React.FC<Repository> = (repository) => {
    return(
        <IonItemSliding>
                  <IonItem>
                    <IonThumbnail slot='start'>
                      <img src={repository.owner.avatar_url} alt={repository.name} />
                    </IonThumbnail>
                    <IonLabel>
                      <h3>{repository.name}</h3>
                      <p>{repository.description}</p>
                      { language != null && language != "" &&
                      (<p>
                        <strong>Language: </strong>
                        {repository.language}
                        </p> )}
                    </IonLabel>
                  </IonItem>
                  <IonItemOptions>
                    <IonItemOption>
                      <IonIcon icon={pencil} slot='icon-only'/>
                    </IonItemOption>
                    <IonItemOption color="danger">
                      <IonIcon icon={trash} slot='icon-only'/>
                    </IonItemOption>
                  </IonItemOptions>
                </IonItemSliding>
    )
}

export default RepoItem