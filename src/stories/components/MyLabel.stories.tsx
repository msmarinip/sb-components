import { MyLabel } from "../../components/MyLabel";
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        size: { control: 'select'}, // puedo agregar , options: [ 'normal', 'h1' ] 
        color: { control: 'select' },
        fontColor: { control: 'color' }
    }
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = ( args ) => <MyLabel { ...args } />


export const Basic = Template.bind({});
Basic.args = {
    size: 'h1',
    allCaps: false //true: capitalizar
}
export const AllCaps = Template.bind({});
AllCaps.args = {
    size: 'normal',
    allCaps: true
}
export const Secondary = Template.bind({});
Secondary.args = {
    size: 'normal',
    color: 'secondary'
}
export const Tertiary = Template.bind({});
Tertiary.args = {
    size: 'normal',
    color: 'tertiary' //primary | secondary | tertiary
}

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
    fontColor: '#5517ac',
    size: 'h1'
}
export const CustomBackgroundColor = Template.bind({});
CustomBackgroundColor.args = {
    fontColor: 'white',
    backgroundColor: 'black',
    size: 'h1'
}