/** overridable */
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";

@Schema()
export class UserProfileInput {
  @Is(a.string().required())
  firstName: string;

  @Is(a.string().required())
  lastName: string;
}

@Schema()
export class UserInsertInput {
  @Is(a.boolean().required())
  isEnabled: boolean;

  @Is(() => Schema.from(UserProfileInput))
  profile: UserProfileInput;
}
