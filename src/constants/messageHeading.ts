import { heading } from '../format/strings.json';

export const headingGenerator = (componentName: string): any => {
    return `## ${componentName} - ${heading}`
};
