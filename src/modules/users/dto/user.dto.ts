import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { UUID } from "crypto";
import { OrderDto } from "src/modules/orders/dto/order.dto";

export class UserDto {
  @ApiProperty({ description: 'Unique identifier for the user.' })
  @Expose()
  id: UUID;

  @ApiProperty({ description: 'First name of the user.' })
  @Expose()
  firstName: string;

  @ApiProperty({ description: 'Last name of the user.' })
  @Expose()
  lastName: string;

  @ApiProperty({ description: 'Email address of the user.' })
  @Expose()
  email: string;

  @ApiProperty({ description: 'Username for the user.' })
  @Expose()
  username: string;

  @ApiProperty({ description: 'Role of the user in the system.' })
  @Expose()
  role: string;

  @ApiProperty({ description: 'Gender of the user.' })
  @Expose()
  gender: string;

  @ApiProperty({ description: 'Profile picture URL of the user.' })
  @Expose()
  avatar: string;

  @ApiProperty({ description: 'Age of the user.' })
  @Expose()
  age: number;

  @ApiProperty({ description: 'Phone number of the user.' })
  @Expose()
  phoneNumber: string;

  @ApiProperty({ description: 'Address of the user.' })
  @Expose()
  address: string;

  @ApiProperty({ description: 'Status of the user account.' })
  @Expose()
  status: string;

  @ApiProperty({ description: 'Orders placed by the user.' })
  Orders?: OrderDto[];
}
