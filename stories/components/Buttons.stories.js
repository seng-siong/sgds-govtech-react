import React from "react";
import { formatCode } from "../lib/utils";
import SyntaxHighlighter from "../lib/SyntaxHighlighter";
import { Page, Title } from "../shared-styles";
import { select, optionsKnob as options, text } from '@storybook/addon-knobs';

const colorOption = {
  Default : '',
  Primary : 'is-primary',
  Secondary : 'is-secondary',
  Success : 'is-success',
  Danger : 'is-danger',
  Info : 'is-info',
  Warning : 'is-warning',
  Dark : 'is-dark',
  Light : 'is-light',
  Text : 'is-text',
}

const roundedOption = {
  isRounded : 'is-rounded'
}

const widthOption = {
  isFullWidth : 'is-fullwidth'
}

const outlineOption = {
  isOutlined : 'is-outlined'
}

const loadingOption = {
  isLoading : 'is-loading'
}

const sizeOption = {
  Default : '',
  isSmall : 'is-small',
  isLarge: 'is-large'
}


const ButtonStories = () => {
  return (
    <Page>
      <Title className="sgds-section">
        <h3 className="has-text-white has-text-weight-semibold">Buttons</h3>
      </Title>
      <section className="sgds-section">
        <h4 className="has-text-primary">
          Buttons are used to draw attention to important actions that you want the users to take.
        </h4>

        <hr className="margin--bottom--lg margin--top--lg"></hr>

        <h5 className="has-text-primary has-text-weight-semibold margin--bottom">
          Standard Usage
        </h5>
        <div className="row is-multiline">
          <div className="col is-6">
            <button 
              
              className={
              `
                sgds-button
                ${select('Colours', colorOption, 'is-primary')} 
                ${options('Rounded', roundedOption, '', {display: 'check'})}
                ${options('Loading', loadingOption, '', {display: 'check'})}
                ${options('Outlined', outlineOption, '', {display: 'check'})}
                ${options('FullWidth', widthOption, '', {display: 'check'})}
                ${select('Size', sizeOption, '')}
              `
            }
            href={text('Link', 'https://www.designsystem.gov.sg')}
            >{text('Text', 'This is a button')} </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <SyntaxHighlighter>
              {formatCode(`<Button href="${text('Link')}" class="sgds-button ${select('Colours')} ${options('Rounded')} ${options('Loading')} ${options('Outlined')} ${options('FullWidth')} ${select('Size')}">${text('Text')}</Button>`)}
            </SyntaxHighlighter>
          </div>
        </div>
        <hr className="margin--top--lg margin--bottom--lg"/>
        <div className="row is-multiline">
          <div className="col is-12">
            <h5 className="has-text-primary has-text-weight-semibold margin--bottom">
              Group buttons Usage
            </h5>
          </div>
          <div className="col is-12">
            <div className="sgds-buttons">
              <button 
                className={
                `
                  sgds-button
                  ${select('Colours')} 
                  ${options('Rounded')}
                  ${options('Loading')}
                  ${options('Outlined')}
                  ${options('FullWidth')}
                  ${select('Size')}
                `
              }
              href={text('Link', 'https://www.designsystem.gov.sg')}
              >{text('Text', 'This is a button')} </button>
              <button className="sgds-button is-primary">Buttons</button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
          <SyntaxHighlighter>
            {formatCode(`<div className="sgds-buttons"><Button href="${text('Link')}" class="sgds-button ${select('Colours')} ${options('Rounded')} ${options('Loading')} ${options('Outlined')} ${options('FullWidth')} ${select('Size')}">${text('Text')}</Button><Button className="sgds-button is-primary">Another button</Button></div>`)}
          </SyntaxHighlighter>
          </div>
        </div>
      </section>
    </Page>
  );
};

export default ButtonStories;
