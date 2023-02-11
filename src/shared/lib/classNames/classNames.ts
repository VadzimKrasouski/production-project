type Mods = Record<string, boolean | string>;

export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
    return [
        cls, ...additional.filter(Boolean),
        Object.entries(mods).filter(([,value]) => Boolean(value)).map(([classNames]) => classNames)
    ].join(' ');
}

classNames('remove-btn', {hovered: true, selectable: true, red: false}, ['pdg'])
//should return 'remove-btn hovered selectable pdg'