import { BirdIcon, CatIcon, DogIcon, FishIcon } from 'lucide-react';
import { match } from 'ts-pattern';

export type UserProfileIconType = 'Dog' | 'Cat' | 'Fish' | 'Bird';

export type UserProfileIconProps = {
  iconType: UserProfileIconType;
};

export function UserProfileIcon(props: UserProfileIconProps) {
  const { iconType } = props;
  return <div data-testid="user-profile-icon-testid">{getUserProfileIcon(iconType)}</div>;
}

function getUserProfileIcon(iconType: UserProfileIconType) {
  return match(iconType)
    .with('Cat', () => <CatIcon size={16} data-testid="cat-icon-testid" />)
    .with('Dog', () => <DogIcon size={16} data-testid="dog-icon-testid" />)
    .with('Fish', () => <FishIcon size={16} data-testid="fish-icon-testid" />)
    .with('Bird', () => <BirdIcon size={16} data-testid="bird-icon-testid" />)
    .otherwise(() => null);
}
