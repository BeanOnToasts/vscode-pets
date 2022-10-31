import { States } from '../states';
import { BasePetType } from '../basepettype';

export class Mod extends BasePetType {
    label = 'mod';
    sequence = {
        startingState: States.sitIdle,
        sequenceStates: [
            {
                state: States.sitIdle,
                possibleNextStates: [States.walkRight, States.runRight],
            },
            {
                state: States.walkRight,
                possibleNextStates: [States.walkLeft, States.runLeft],
            },
            {
                state: States.runRight,
                possibleNextStates: [States.walkLeft, States.runLeft],
            },
            {
                state: States.walkLeft,
                possibleNextStates: [States.sitIdle],
            },
            {
                state: States.runLeft,
                possibleNextStates: [States.sitIdle],
            },
            {
                state: States.chase,
                possibleNextStates: [States.idleWithBall],
            },
            {
                state: States.idleWithBall,
                possibleNextStates: [
                    States.walkRight,
                    States.walkLeft,
                    States.runLeft,
                    States.runRight,
                ],
            },
        ],
    };
    get emoji(): string {
        return '🤖';
    }
    get hello(): string {
        return ` Hi, I'm Mod the dotnet bot, what are you building today?`;
    }
}

export const MOD_NAMES: ReadonlyArray<string> = [
    'Mod',
    'Moddy',
    'Dotnetbot',
    'Bot',
    'Purple Pal',
    'Ro Bot',
];
