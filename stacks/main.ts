import {App} from 'aws-cdk-lib'
import {TestStack} from './testStack'

const app = new App()

new TestStack(app, 'ESBuild-Issue-Stack')