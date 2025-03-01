import Link from 'next/link';
import { UserProps } from 'prisma/types';
import { useTranslation } from 'next-i18next'

type Props = {
  users: UserProps[]
}

export default function Users({ users }: Props) {
    const { t } = useTranslation();
    return (
    <div>
      {
        users.map((user, i) => { 
          return (
            <div key={user.id}>
              {i+1}. <Link href={`/user/${user.id}`}>{user.name}</Link>: 
                <span>
                  {t('exercises_and_average', {amount: user?.exercises?.length, average: user?.avg?.toFixed(2)})}
                </span>
            </div>
          )
        })
      }
      </div>
    )
  }