import {Stack} from 'aws-cdk-lib'
import {Runtime} from 'aws-cdk-lib/aws-lambda'
import {NodejsFunction} from 'aws-cdk-lib/aws-lambda-nodejs'
import {Construct} from 'constructs'

export class TestStack extends Stack {
  constructor(scope: Construct, id: string) {
    super(scope, id, {})
    new NodejsFunction(this, 'brokenLambda', {
      entry: 'src/handler.ts',
      handler: 'main',
      runtime: Runtime.NODEJS_20_X,
    })
  }
}