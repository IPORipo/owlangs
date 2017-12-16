export default class Observer {
    
    constructor() {
        this.topics = {};
        this.subscribe = subscribe();
    }

    subscribe(topic,listener) {
        if (!topics[topic]) topics[topic] = { quee: [] };

        let index = topics[topic].quee.push(listener) - 1;  

        return {  
            remove: function () {
                delete topics[topic].quee[index]
            }
        }

    }

    publish(topic, info) {
        if (!topics[topic] || !topics[topic].quee.length) return;

        var
    }

    

}

