/** overridable */
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { IPasswordAuthenticationStrategy } from "@bluelibs/password-bundle";
import { UserRoles } from "./enums/UserRoles.enum";
export { UserRoles };

@Schema()
export class UserProfile {
  @Is(a.string().required())
  firstName: string;

  @Is(a.string().required())
  lastName: string;
}

@Schema()
export class User {
  @Is(an.objectId())
  _id?: any;

  @Is(a.date().required())
  createdAt: Date;

  email?: string;

  fullName?: string;

  /**
   * @description This field is used to identify if this object has been soft-deleted
   */
  @Is(a.boolean().nullable())
  isDeleted?: boolean;

  @Is(a.boolean().required())
  isEnabled: boolean;

  /**
   * @description This is the model that stores password authentication data such as emails, hashed password, salt and other security related data
   */
  password: IPasswordAuthenticationStrategy;

  @Is(() => Schema.from(UserProfile))
  profile: UserProfile;

  roles?: UserRoles[];
}
