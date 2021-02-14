import React, { useState, useEffect } from 'react';
import ActivityCard from './activityCard';
import Paginator from './paginator';
import TextBox from './TextBox';

const ActivitiesFeed = ({
  activities,
  hydrateFn,
  limit,
  heading = 'Activities',
  isLink,
}) => {
  const [allActivities, setAllActivities] = useState(null);
  const [pagedActivities, setPagedActivities] = useState(null);

  useEffect(() => {
    if (activities) {
      setAllActivities(hydrateFn(activities));
    }
  }, [activities]);

  console.log('allActivities', allActivities);

  return (
    <>
      <TextBox>{heading}</TextBox>
      {pagedActivities
        ? pagedActivities.map((activity, index) => (
            <ActivityCard
              key={`${activity.id}-${index}`}
              activity={activity}
              displayAvatar={true}
              isLink={isLink}
            />
          ))
        : null}
      {!allActivities?.length ? (
        <TextBox variant='value'>Not much happening yet</TextBox>
      ) : null}
      <Paginator
        perPage={limit}
        setRecords={setPagedActivities}
        allRecords={allActivities}
      />
    </>
  );
};

export default ActivitiesFeed;
