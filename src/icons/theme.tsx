import { Accessor, ComponentProps,PropsWithChildren, Setter, Show, } from "solid-js";
import { Made_a_Solid_Circle_Around_Icon, Make_a_OutlineCircle_Around_Icon, MakePlayAbleIconBtn } from "../core/utils";

type SvgOptions = PropsWithChildren<ComponentProps<"svg">>;
type SvgWithIconsOptions<P = {}> = P & {
	type?: "solid" | "outline";
};

type PlayStateWithButton<P = {}> = P & {
	state: Accessor<boolean>;
	setState: Setter<boolean>;
	colors?:[
		{
			stroke:string,
			fill:string,
		},
		{
			stroke:string,
			fill:string,
		}
	];
	width?:number,
	height?:number,
};

// type PlayStateWithButton<P = {}> = P & {
// 	state: Accessor<boolean>;
// 	setState: Setter<boolean>;
// };

type IconOptions = SvgWithIconsOptions<SvgOptions>;
type ButtonOptions = PlayStateWithButton<ComponentProps<"button">>;

const SunIcon = (props: IconOptions) => {
	return (
		<Show
			when={props.type === "outline"}
			fallback={
				<Made_a_Solid_Circle_Around_Icon {...props}>
  <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
				</Made_a_Solid_Circle_Around_Icon>
			}>
			<Make_a_OutlineCircle_Around_Icon {...props}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
			</Make_a_OutlineCircle_Around_Icon>
		</Show>
	);
};

const MoonIcon = (props: IconOptions) => {
	return (
		<Show
			when={props.type === "outline"}
			fallback={
				<Made_a_Solid_Circle_Around_Icon {...props}>
  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
				</Made_a_Solid_Circle_Around_Icon>
			}>
			<Make_a_OutlineCircle_Around_Icon {...props}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
			</Make_a_OutlineCircle_Around_Icon>
		</Show>
	);
};

const PlayButton = (props: ButtonOptions) => {
	return <MakePlayAbleIconBtn 
		colors={[
			{
				fill:"#FF0060",
				stroke:"#FFF"
			},{
				fill:"#FF0060",
				stroke:"#FFF"
			}
		]}
		icons={[
			{
				hovered:SunIcon,
				unhover:SunIcon,
			},
			{
				hovered:MoonIcon,
				unhover:MoonIcon
			},
		]}
		width={40}
		height={40} 
		{...props} 
	/>
};

export default PlayButton;
