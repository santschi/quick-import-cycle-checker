import { GraphCreatorUtil } from './util/graph-creator.util';
import { CycleCheckerUtil } from './util/cycle-checker.util';

export async function main() {
    // TODO Make this more elegant/configurable
    const dirPath = __dirname;

    const importGraph = await GraphCreatorUtil.createGraphForDir(dirPath);
    CycleCheckerUtil.checkForCycles(importGraph);
}
