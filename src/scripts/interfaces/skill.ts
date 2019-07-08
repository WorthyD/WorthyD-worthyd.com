export interface Skill {
    name: string,
    icon: string,
    skill: number,
    interest: number,
    content: string,
    type: SkillType
}

export enum SkillType{
    Language,
    Application,
    Framework
}