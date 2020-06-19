import * as React from 'react';
import styles from './BusinessFormFg.module.scss';
import { PeoplePicker, PrincipalType } from "@pnp/spfx-controls-react/lib/PeoplePicker";
import { WebPartContext } from '@microsoft/sp-webpart-base';
import { IBusinessFormFgProps } from './IBusinessFormFgProps';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { IStackTokens, Stack } from 'office-ui-fabric-react/lib/Stack';
import { Dropdown, DropdownMenuItemType, IDropdownStyles, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';

import ProjectSponser from './ProjectSponser';

const options: IDropdownOption[] = [
  { key: '', text: 'Select an Option', itemType: DropdownMenuItemType.Header},
  { key: 'Manager', text: 'Manager' },
  {key:'Director', text:'Director'},
  {key:'Finance HOD', text:'Finance HOD'},
  {key:'Legal', text:'Legal'},
  {key:'CFO', text:'CFO'},
  {key:'CEO', text:'CEO'}
];
const dropdownStyles: Partial<IDropdownStyles> = {
  dropdown: { width: 300 },
  
}
const stackTokens: IStackTokens = { childrenGap: 20 };

//For Calendar Control

export default class BusinessFormFg extends React.Component<IBusinessFormFgProps, {}> {
  public render(): React.ReactElement<IBusinessFormFgProps> {
    return (


      <div className={styles.businessFormFg}>

      <div className={styles.container}>   
        <table className="classMainTable">
    <tr><td></td><td></td><td></td><td></td></tr>
  <tr className={styles.headingRow}>
    <td className={styles.headingText}>Project Title</td>
    <td><TextField required /></td>   
  </tr>
  <tr>
    <td className={styles.normalHeaderText}>SUBMITTED BY</td>
    <td className={styles.normalHeaderInput}><TextField required/></td>
    <td className={styles.normalHeaderText}>PROJECT TYPE</td>
    <td className={styles.normalHeaderInput}><TextField required/></td>   
  </tr>
  <tr>
    <td className={styles.normalHeaderText}>PHONE / EMAIL</td>
    <td className={styles.normalHeaderInput}><TextField /></td>
    <td className={styles.normalHeaderText}>TOTAL ESTIMATED BUDGET
    </td>
    <td className={styles.normalHeaderInput}><TextField required /></td>   
  </tr>
  <tr>
    <td className={styles.normalHeaderText}>DATE OF PROPOSAL</td>
    <td className={styles.normalHeaderInput}><TextField required /></td>
    <td className={styles.normalHeaderText}>VERSION NO</td>
    <td className={styles.normalHeaderInput}><TextField required /></td>   
  </tr>
  <tr>
    <td className={styles.normalHeaderText}>PROJECTED START DATE</td>
    <td className={styles.normalHeaderInput}><TextField required /></td>
    <td className={styles.normalHeaderText}>PROJECTED COMPLETION DATE</td>
    <td className={styles.normalHeaderInput}><TextField required /></td>   
  </tr>
</table>
<div className={styles.normalGap}></div>

    <ProjectSponser contextProp={this.props.context as WebPartContext} />
    
    <div className={styles.normalHeading}><span>PROJECT MANAGER   Confirms need for project and validates objectives; Provides specs, monitoring, and overall delivery 
</span></div>
<div id="pplpk2"><PeoplePicker
    context={this.props.context as WebPartContext}
    personSelectionLimit={1}
    groupName={""} 
    showtooltip={true}
    isRequired={true}
    disabled={false}
    selectedItems={this._getPeoplePickerItems}
    showHiddenInUI={false}
    principalTypes={[PrincipalType.User]}
    resolveDelay={1000} /></div>
    <div className={styles.normalGap}></div>

    <table className={styles.classMainTable}>
      <tr><td></td><td></td><td></td></tr>
      <tr>
        <td className={styles.tdStakeHolder}>
        <div id="pplpkStakeholder"><PeoplePicker
    context={this.props.context as WebPartContext}
    personSelectionLimit={1}
    groupName={""} 
    showtooltip={true}
    isRequired={true}
    disabled={false}
    selectedItems={this._getPeoplePickerItems}
    showHiddenInUI={false}
    principalTypes={[PrincipalType.User]}
    resolveDelay={1000} /></div>
    <div className={styles.normalGap}></div>
        </td>
        <td className={styles.tdStakeHolder}>
        <Stack tokens={stackTokens}>
        <Dropdown
        placeholder="Select an option"        
        options={options}
        styles={dropdownStyles} />
        </Stack>
        </td>
        <td className={styles.tdStakeHolder}><TextField /></td>
      </tr>
    </table>
    <div className={styles.normalGap}></div>
    <div className={styles.normalHeading}><span>PROJECT OVERVIEW 
</span></div>
<div className={styles.normalSubHeading}><span>SUMMARY 
</span></div>
<div><TextField multiline autoAdjustHeight required /></div>

<div className={styles.normalSubHeading}><span>OBJECTIVES 
</span></div>
<div><TextField multiline autoAdjustHeight required /></div>

<div className={styles.normalSubHeading}><span>BUSINESS JUSTIFICATION 
</span></div>
<div><TextField multiline autoAdjustHeight required /></div>

<div className={styles.normalSubHeading}><span>CASE FOR FAST TRACK 
</span></div>
<div><TextField multiline autoAdjustHeight required /></div>


<div className={styles.normalSubHeading}><span>DEPENDENCIES / RELATED PROJECTS
</span></div>
<div><TextField multiline autoAdjustHeight /></div>

<div className={styles.normalSubHeading}><span>TECHNOLOGY 
</span></div>
<div><TextField multiline autoAdjustHeight /></div>

<div className={styles.normalSubHeading}><span>RISK OVERVIEW 
</span></div>
<div><TextField multiline autoAdjustHeight /></div>
<div className={styles.normalGap}></div>
    <div className={styles.normalHeading}><span>SCOPE OF PROJECT 
</span></div>
<div className={styles.normalSubHeading}><span>ASPECTS IMPACTED
</span></div>

<table className={styles.classMainTable}>
      <tr><td></td><td></td></tr>
      <tr><td className={styles.tdScope}><span>IN SCOPE</span></td>
      <td><TextField multiline autoAdjustHeight /></td></tr>
      <tr><td className={styles.tdScope}><span>OUT OF SCOPE</span></td>
      <td><TextField multiline autoAdjustHeight /></td>
      </tr>
      </table>


      <div className={styles.normalSubHeading}><span>DELIVERABLES 
</span></div>
<div><TextField multiline autoAdjustHeight /></div>
<div className={styles.normalGap}></div>
<div className={styles.normalSubHeading}><span>TIMELINE / MILESTONES
</span></div>

<table className={styles.classMainTable}>
      <tr><td></td><td></td></tr>
      <tr><td className={styles.tdMilesStones}><span>IN SCOPE</span></td>
      <td><TextField multiline autoAdjustHeight /></td></tr>         
      </table>

      <div className={styles.normalSubHeading}><span>TIMELINE / MILESTONES
</span></div>
      <table className={styles.classMainTable}>
      <tr><td className={styles.normalSubHeading}>MILESTONE</td>
      <td className={styles.normalSubHeading}>DEADLINE</td></tr>
      <tr><td className={styles.tdMilesStones}><span>IN SCOPE</span></td>
      <td><TextField multiline autoAdjustHeight /></td></tr>         
      </table>

    </div>
  </div>      
    );
  }
  
  private _getPeoplePickerItems(items: any[]) {
    console.log('Items:', items);
  } 
  
}
 
