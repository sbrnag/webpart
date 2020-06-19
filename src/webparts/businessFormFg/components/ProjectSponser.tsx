import * as React from 'react';

import styles from './BusinessFormFg.module.scss';
import { PeoplePicker, PrincipalType } from "@pnp/spfx-controls-react/lib/PeoplePicker";
import { WebPartContext } from '@microsoft/sp-webpart-base';
import { DefaultButton } from 'office-ui-fabric-react';


interface IProps {
    contextProp: WebPartContext
  }

const ProjectSponser: React.FC<IProps> = ({contextProp } : IProps) => {

    const [count, setCount] = React.useState([1]);

    function handleAddNew(): void {
        let newCount = count.length + 1;
        setCount([...count, newCount]);
    }

    function getPeoplePickerItems(items: any[]): void {
        console.log('Items:', items);
      }

    return (
      <div>
          <div className={styles.normalHeading}>
            <span>PROJECT SPONSOR   Commissions delivery of and champions project; Provides vision and direction; Accepts responsibility</span>
        </div>
          {count.map( c => {
              return (
                <div id="pplpk1" key={c}>
                    <PeoplePicker
                        context={contextProp}
                        personSelectionLimit={1}
                        groupName={""} 
                        showtooltip={true}
                        isRequired={true}
                        disabled={false}
                        selectedItems={getPeoplePickerItems}
                        showHiddenInUI={false}
                        principalTypes={[PrincipalType.User]}
                        resolveDelay={1000} />
                </div>
              )
          })}
        

        <DefaultButton text="Add New" onClick={handleAddNew} />
      </div>
    );
  };
  
  export default ProjectSponser;