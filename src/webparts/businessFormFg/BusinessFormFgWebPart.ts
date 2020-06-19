import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'BusinessFormFgWebPartStrings';
import BusinessFormFg from './components/BusinessFormFg';
import { IBusinessFormFgProps } from './components/IBusinessFormFgProps';
import { PeoplePicker, PrincipalType } from "@pnp/spfx-controls-react/lib/PeoplePicker";
import { WebPartContext } from '@microsoft/sp-webpart-base';
import {PeoplePickerControl} from './loc/PeoplePickerControl';

export interface IBusinessFormFgWebPartProps {
  description: string;
  context:WebPartContext;
}

export default class BusinessFormFgWebPart extends BaseClientSideWebPart <IBusinessFormFgWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IBusinessFormFgProps> = React.createElement(
      BusinessFormFg,
      {
        description: this.properties.description,
        context: this.context
      }
    );

    ReactDom.render(element, this.domElement);
    //ReactDom.render(PeoplePickerControl,document.getElementById('pplpk1'));
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
