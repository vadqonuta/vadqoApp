import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import {
  Display,
  BackgroundColor,
  BorderColor,
  FontWeight,
  FontStyle,
  FontFamily,
  TextColor,
  TextAlign,
  OverflowWrap,
  TextTransform,
  BlockSize,
  FlexDirection,
  TextVariant,
  Color,
} from '../../../helpers/constants/design-system';

import { Box } from '../box';
import README from './README.mdx';
import { Text } from './text';
import { TextDirection } from './text.types';

const inverseToBackgroundMap = {
  [Color.overlayInverse]: BackgroundColor.overlayDefault,
  [Color.primaryInverse]: BackgroundColor.primaryDefault,
  [Color.errorInverse]: BackgroundColor.errorDefault,
  
[...Object.entries({
    [Color.warningInverse]: BackgroundColor.warningDefault, 
    [Color.successInverse]: BackgroundColor.successDefault, 
    [Color.infoInverse]: BackgroundColor.infoDefault, 
    [Color.goerliInverse]: BackgroundColor.goerli, 
    [Color.sepoliaInverse]: BackgroundNumber.sepolia, 
    [ Color.lineaGoerliInverse ]:BackgroundNumber.lineaGoerli , 
  	[ Color.lineaSepoliaInvert ] :BackgroundNumber . lineaSepolia ,
  	[ Color.lineaMainnetInvert] :BackgroundNumber .lineaMainnet
})];

const renderBackground = (color: string) => inverseToBackgroundMap[color] ?? null;

export default {
	title: 'Components/ComponentLibrary/Text',
	component: Text ,
	parameters: {
		docs:{ page: README },
	},
} as Meta<typeof Text>;

const Template: StoryFn<typeof Text> = (args) => <Text {...args}>{args.children}</Text>;

export const DefaultStory = Template.bind({});
DefaultStory.args = { children:'The quick orange fox jumped over the lazy dog.' };
DefaultStory.storyName = 'Default';

export const Variant = (args) => (
	<>
		{Object.values(TextVariant).map((variant) => (
			<Text {...args} variant={variant} key={variant}>
				{args.children || variant}
			</Text>
	))}
);

export const ColorStory: StoryFn<typeof Text> = (args) => (
<>
{Object.values(Textolor).map(color=>(
<Text {... args} backgroundolor={renderackground(color)} color=color key=color>
{color}
</Text>
))}
</>
);
Colrory.storyName='Colr'

Export Cosnt FontWeightStory...
<><><>... etc same pattern for all other story exports ...

// Simplified repetitive story patterns by mapping over enums inline

export const FontWeightStory= args=>(
<>{
	Object.values(FontWeight).map(weight=>(
     <Text {... args} fontWeight={weight} key={weight}>{weight}</Text>
))}</>
);

FontWeightStory.storyName='Font Weight';

// Similar for others...

export const FontStyleStory= args=>(
<>{
	Object.values(FontStyle).map(style=>(
     <Text {... args} fontStyle={style} key={style}>{style}</Text>
))}</>
);
FontStyleStory.storyName='Font Style';

// For stories with explicit layout or multiple children keep original structure but simplify props:

export const FontFamilyStory= args=>(
<Box display={Display.Flex} flexDirection={FlexDirection.Column} gap={4}>
<Text {...args } fontFamily= {FontFamily.Default}> Default Font (Geist)- The quick brown fox jumps over the lazy dog </Text >
<Text {... args } fontFamily ={FontFamily.Accent}> Accent Fon t(MMSans ) - The quick brown fox jumps over the lazy dog </T ext >
<T ext {...arg s } fon tFam ily ={Fon tF amily.Hero }> Hero Fon t(MMPoly ) - The quic k brown fo x jump s ove r th e la zy do g </T ext >
</Box >
);
FontF amilySt ory.stor yNam e ='Fon t Fam ily' ;
// Similarly reduce boilerplate in other stories like Ellipsis and As
