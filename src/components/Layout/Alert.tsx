import {useState, useEffect, useRef, memo} from 'react';
import {useRouter} from 'next/router';
import {FC} from "react";
import {alertService, AlertType} from "../../services/alert.service";


export const Alert: FC<{ id?: string, fade?: boolean }> = memo(({id = "default-alert", fade = true}) => {
  const mounted = useRef(false);
  const router = useRouter();
  const [alerts, setAlerts] = useState<any[]>([]);

  useEffect(() => {
    mounted.current = true;

    // subscribe to new alert notifications
    const subscription = alertService.onAlert(id)
      .subscribe(alert => {
        // clear alerts when an empty alert is received
        if (!alert.message) {
          setAlerts(alerts => {
            // filter out alerts without 'keepAfterRouteChange' flag
            const filteredAlerts = alerts.filter(x => x.keepAfterRouteChange);

            // remove 'keepAfterRouteChange' flag on the rest
            return omit(filteredAlerts, 'keepAfterRouteChange');
          });
        } else {
          // add alert to array with unique id
          alert.itemId = Math.random();
          setAlerts(alerts => ([...alerts, alert]));
          console.log(alert)

          // auto close alert if required
          if (alert.autoClose) {
            setTimeout(() => removeAlert(alert), 3000);
          }
        }
      });


    // clear alerts on location change
    const clearAlerts = () => alertService.clear(id);
    router.events.on('routeChangeStart', clearAlerts);

    // clean up function that runs when the component unmounts
    return () => {
      mounted.current = false;

      // unsubscribe to avoid memory leaks
      subscription.unsubscribe();
      router.events.off('routeChangeStart', clearAlerts);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function omit(arr: any[], key: string): any[] {
    return arr.map(obj => {
      const {[key]: omitted, ...rest} = obj;
      return rest;
    });
  }

  function removeAlert(alert: any) {
    if (!mounted.current) return;

    if (fade) {
      // fade out alert
      setAlerts(alerts => alerts.map(x => x.itemId === alert.itemId ? {...x, fade: true} : x));

      // remove alert after faded out
      setTimeout(() => {
        setAlerts(alerts => alerts.filter(x => x.itemId !== alert.itemId));
      }, 250);
    } else {
      // remove alert
      setAlerts(alerts => alerts.filter(x => x.itemId !== alert.itemId));
    }
  }

  const cssClasses = (alert: any): string => {
    if (!alert) return '';

    const classes = [
      'opacity-1 transition ease-in-out duration-500 flex items-center mt-3 mx-auto w-[80%] p-4 text-sm rounded-lg',
      'dark:bg-gray-800'
    ];

    const alertTypeClass = {
      [AlertType.Success]: 'text-green-800 bg-green-50 dark:text-green-400',
      [AlertType.Error]: 'text-red-800 bg-red-50 dark:text-red-400',
      [AlertType.Info]: 'text-orange-800 bg-orange-50 dark:text-orange-400',
      [AlertType.Warning]: 'text-yellow-800 bg-yellow-50 dark:text-yellow-300'
    }

    classes.push(alertTypeClass[alert.type as AlertType]);

    if (alert.fade) {
      classes.push('opacity-0');
    }

    console.log(classes)
    return classes.join(' ');
  }

  if (!alerts.length) return null;

  return (
    <div id="alertContainer" className="mt-12 z-[1100] fixed w-[100%]">
      {alerts.map((alert: any, index) => {
        console.log(alert)
        return <div key={index} className={cssClasses(alert)}>
          {/*<a className="close flex-shrink-0 inline w-4 h-4" onClick={() => removeAlert(alert)}>&times;</a>*/}
          <span className="font-medium" dangerouslySetInnerHTML={{__html: alert.message}}></span>
        </div>
      })}
    </div>
  );
})
