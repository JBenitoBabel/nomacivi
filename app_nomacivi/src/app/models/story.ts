
export interface Story {
    title: string,
    text?: string;
    storyOption?: StoryOption[];
}

export interface StoryOption {
    type: TypeOption.story | TypeOption.event | TypeOption.planet | TypeOption.camp | TypeOption.community;
    textButton: string;
    nextStoryIndex?: number;
    data?: NavigationData;
}

export enum TypeOption {
    story = 'story',
    event = 'event',
    planet = 'planet',
    camp = 'camp',
    community = 'community'
}

export interface NavigationData {
    route: string;
}